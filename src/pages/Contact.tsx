import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const SMTP_API_URL = import.meta.env.VITE_SMTP_API_URL || "http://localhost:3001/api/contact";

const SlideToSend = ({ status, onSend, isFormValid }: { status: string; onSend: (e: React.FormEvent) => void; isFormValid: boolean }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [sent, setSent] = useState(false);

  const getTrackWidth = () => (trackRef.current ? trackRef.current.offsetWidth - 56 : 260);

  const fillOpacity = useTransform(x, [0, getTrackWidth()], [0, 1]);
  const textOpacity = useTransform(x, [0, getTrackWidth() * 0.35], [1, 0]);
  const checkOpacity = useTransform(x, [getTrackWidth() * 0.75, getTrackWidth()], [0, 1]);
  const iconRotate = useTransform(x, [0, getTrackWidth()], [0, 90]);

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        animate(x, 0, { type: "spring", stiffness: 200, damping: 25 });
        setSent(false);
      }, 1200);
    }
  }, [status]);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const max = getTrackWidth();
    if (info.offset.x >= max * 0.85) {
      animate(x, max, { duration: 0.15 });
      setSent(true);
      onSend({ preventDefault: () => {} } as React.FormEvent);
    } else {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  const isDisabled = status === "sending" || sent || !isFormValid;

  return (
    <div
      ref={trackRef}
      className="relative w-full h-14 rounded-full overflow-hidden select-none"
      style={{ background: "#f3f3f3", border: "1px solid #000000" }}
      title={!isFormValid ? "Please fill all fields first" : undefined}
    >
      {/* Filled track */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ opacity: fillOpacity, background: "#cacaca", transformOrigin: "left" }}
      />

      {/* Track label */}
      <motion.span
        style={{ opacity: isDisabled && !sent ? 0.35 : textOpacity, color: "#000" }}
        className="absolute inset-0 flex items-center justify-center text-[11px] font-bold uppercase tracking-[0.25em] pointer-events-none"
      >
        {sent ? "Sent ✓" : !isFormValid ? "Fill all fields first" : "Slide to Send →"}
      </motion.span>

      {/* Thumb */}
      <motion.div
        drag={isDisabled ? false : "x"}
        dragConstraints={{ left: 0, right: getTrackWidth() }}
        dragElastic={0}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        className="absolute top-1 left-1 w-12 h-12 rounded-full flex items-center justify-center z-10"
        style={{ x, background: isDisabled && !sent ? "#555" : "#fff", cursor: isDisabled ? "not-allowed" : "grab" }}
        whileTap={isDisabled ? {} : { scale: 0.93 }}
      >
        <motion.svg
          viewBox="0 0 24 24" fill="none" strokeWidth="2.5" className="w-5 h-5"
          stroke={isDisabled && !sent ? "#888" : "#000"}
          style={{ rotate: iconRotate }}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </motion.svg>
      </motion.div>

      {/* Checkmark on complete */}
      <motion.div
        className="absolute top-1 right-1 w-12 h-12 rounded-full flex items-center justify-center pointer-events-none"
        style={{ opacity: checkOpacity, background: "#fff" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" className="w-5 h-5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </motion.div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(SMTP_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="h-screen w-full bg-white text-black font-sans px-4 md:px-8 lg:px-12 overflow-hidden flex items-center justify-center relative">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 max-w-[1400px] w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
          <motion.div variants={itemVariants} className="mb-8 lg:mb-0">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-left">
              Contact <br />
              Me <span className="inline-block ml-2">→</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 lg:mt-0 hidden lg:block">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-black/60">
              Contact Form
            </h2>
            <p className="text-base md:text-lg font-normal leading-relaxed text-black/80 max-w-md text-left">
              Send me a message and I'll get back to you as soon as possible. Let's build something great together.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Form */}
        <motion.div className="lg:col-span-5 flex flex-col justify-center" variants={itemVariants}>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider">First Name*</label>
                <input
                  type="text" id="firstName" name="firstName"
                  value={formData.firstName} onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/30 py-1 text-lg font-medium focus:border-black focus:outline-none transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider">Last Name*</label>
                <input
                  type="text" id="lastName" name="lastName"
                  value={formData.lastName} onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/30 py-1 text-lg font-medium focus:border-black focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider">Email*</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/30 py-1 text-lg font-medium focus:border-black focus:outline-none transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider">Subject*</label>
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/30 py-1 text-lg font-medium focus:border-black focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider">Message*</label>
              <textarea
                id="message" name="message" rows={3}
                value={formData.message} onChange={handleChange}
                className="w-full bg-transparent border-b border-black/30 py-1 text-lg font-medium focus:border-black focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            {/* Submit */}
            <div className="mt-4 flex flex-col gap-2">
              <SlideToSend
                status={status}
                onSend={handleSubmit}
                isFormValid={Object.values(formData).every((v) => v.trim() !== "")}
              />

              {status === "success" && (
                <p className="text-sm text-green-600 font-medium">✓ Message sent! I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500 font-medium">✗ Something went wrong. Please try again.</p>
              )}
            </div>

          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
