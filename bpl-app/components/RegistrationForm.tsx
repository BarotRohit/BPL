"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Calendar, MapPin, CheckCircle, Loader2, AlertCircle, Shield } from "lucide-react";
import dynamic from "next/dynamic";

const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

const schema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long")
    .regex(/^[a-zA-Z\s]+$/, "Name should only contain letters"),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine((date) => {
      const dob = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      return age >= 10 && age <= 60;
    }, "Age must be between 10 and 60 years"),
  address: z
    .string()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address is too long"),
  role: z.enum(
    ["Batsman", "Bowler", "Wicket Keeper Batsman", "Batting All Rounder", "Bowling All Rounder"],
    { message: "Please select a valid role" }
  ),
  gender: z.enum(["Male", "Female"], { message: "Please select a gender" }),
  suggestions: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function RegistrationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Registration failed. Please try again.");
      }

      setStatus("success");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 8000);
    } catch (error: unknown) {
      setStatus("error");
      const msg = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setErrorMessage(msg);
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
    reset();
  };

  return (
    <div className="relative">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-[9997]">
          <ReactConfetti
            width={typeof window !== "undefined" ? window.innerWidth : 1200}
            height={typeof window !== "undefined" ? window.innerHeight : 800}
            recycle={false}
            numberOfPieces={300}
            colors={["#f5c518", "#6c35de", "#00d4ff", "#ff6b35", "#ffffff"]}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-col items-center justify-center py-16 px-8 text-center gap-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="text-8xl"
            >
              🏆
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-bebas text-4xl gradient-text-gold mb-3 tracking-wider">
                Welcome to BPL Season 2!
              </h3>
              <p className="font-inter text-white/70 text-base leading-relaxed max-w-sm">
                🎉 You&apos;ve successfully registered! We&apos;ll contact you on your mobile number with further details. 
                Get ready for the biggest cricket festival of Barot!
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3"
            >
              <CheckCircle className="text-green-400 w-6 h-6" />
              <span className="font-rajdhani font-600 text-green-400">Registration Confirmed!</span>
            </motion.div>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={handleReset}
              className="btn-secondary mt-2"
            >
              Register Another Player
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-rajdhani font-600 text-white/70 mb-2 tracking-wide">
                <User size={14} className="inline mr-2 text-royal-light" />
                Full Name <span className="text-orange">*</span>
              </label>
              <input
                {...register("fullName")}
                type="text"
                placeholder="Enter your full name"
                className={`form-input ${errors.fullName ? "error" : ""}`}
              />
              {errors.fullName && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs font-inter mt-1.5 flex items-center gap-1"
                >
                  <AlertCircle size={12} />
                  {errors.fullName.message}
                </motion.p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-rajdhani font-600 text-white/70 mb-2 tracking-wide">
                <Phone size={14} className="inline mr-2 text-cyan" />
                Mobile Number <span className="text-orange">*</span>
              </label>
              <input
                {...register("mobile")}
                type="tel"
                placeholder="10-digit mobile number"
                maxLength={10}
                className={`form-input ${errors.mobile ? "error" : ""}`}
              />
              {errors.mobile && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs font-inter mt-1.5 flex items-center gap-1"
                >
                  <AlertCircle size={12} />
                  {errors.mobile.message}
                </motion.p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-rajdhani font-600 text-white/70 mb-2 tracking-wide">
                <Calendar size={14} className="inline mr-2 text-gold" />
                Date of Birth <span className="text-orange">*</span>
              </label>
              <input
                {...register("dateOfBirth")}
                type="date"
                max={new Date().toISOString().split("T")[0]}
                className={`form-input ${errors.dateOfBirth ? "error" : ""}`}
                style={{ colorScheme: "dark" }}
              />
              {errors.dateOfBirth && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs font-inter mt-1.5 flex items-center gap-1"
                >
                  <AlertCircle size={12} />
                  {errors.dateOfBirth.message}
                </motion.p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-rajdhani font-600 text-white/70 mb-2 tracking-wide">
                <User size={14} className="inline mr-2 text-royal-light" />
                Gender <span className="text-orange">*</span>
              </label>
              <div className="relative">
                <select
                  {...register("gender")}
                  className={`form-input appearance-none bg-dark text-white ${errors.gender ? "error" : ""}`}
                  defaultValue=""
                >
                  <option className="bg-[#0a0e27] text-white" value="" disabled>Select your gender</option>
                  <option className="bg-[#0a0e27] text-white" value="Male">Male</option>
                  <option className="bg-[#0a0e27] text-white" value="Female">Female</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {errors.gender && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs font-inter mt-1.5 flex items-center gap-1"
                >
                  <AlertCircle size={12} />
                  {errors.gender.message}
                </motion.p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-rajdhani font-600 text-white/70 mb-2 tracking-wide">
                <Shield size={14} className="inline mr-2 text-cyan" />
                Player Role <span className="text-orange">*</span>
              </label>
              <div className="relative">
                <select
                  {...register("role")}
                  className={`form-input appearance-none bg-dark text-white ${errors.role ? "error" : ""}`}
                  defaultValue=""
                >
                  <option className="bg-[#0a0e27] text-white" value="" disabled>Select your role</option>
                  <option className="bg-[#0a0e27] text-white" value="Batsman">Batsman</option>
                  <option className="bg-[#0a0e27] text-white" value="Bowler">Bowler</option>
                  <option className="bg-[#0a0e27] text-white" value="Wicket Keeper Batsman">Wicket Keeper Batsman</option>
                  <option className="bg-[#0a0e27] text-white" value="Batting All Rounder">Batting All Rounder</option>
                  <option className="bg-[#0a0e27] text-white" value="Bowling All Rounder">Bowling All Rounder</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {errors.role && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs font-inter mt-1.5 flex items-center gap-1"
                >
                  <AlertCircle size={12} />
                  {errors.role.message}
                </motion.p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-rajdhani font-600 text-white/70 mb-2 tracking-wide">
                <MapPin size={14} className="inline mr-2 text-orange" />
                Address <span className="text-orange">*</span>
              </label>
              <textarea
                {...register("address")}
                rows={3}
                placeholder="Enter your full address"
                className={`form-input resize-none ${errors.address ? "error" : ""}`}
              />
              {errors.address && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs font-inter mt-1.5 flex items-center gap-1"
                >
                  <AlertCircle size={12} />
                  {errors.address.message}
                </motion.p>
              )}
            </div>

            {/* Error Message */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
              >
                <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-red-400 text-sm font-inter font-medium">Registration Failed</p>
                  <p className="text-red-400/70 text-xs font-inter mt-0.5">{errorMessage}</p>
                </div>
              </motion.div>
            )}

            {/* Suggestions */}
            <div>
              <label className="block text-sm font-rajdhani font-600 text-white/70 mb-2 tracking-wide">
                <Shield size={14} className="inline mr-2 text-cyan" />
                Suggestions (Optional)
              </label>
              <textarea
                {...register("suggestions")}
                placeholder="Any suggestions for BPL Season 2?"
                rows={2}
                className={`form-input resize-none ${errors.suggestions ? "error" : ""}`}
              />
              {errors.suggestions && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs font-inter mt-1.5 flex items-center gap-1"
                >
                  <AlertCircle size={12} />
                  {errors.suggestions.message}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={status !== "loading" ? { scale: 1.02, y: -2 } : {}}
              whileTap={status !== "loading" ? { scale: 0.98 } : {}}
              className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <Loader2 size={20} className="animate-spin" />
                  Registering...
                </span>
              ) : (
                <span>🏏 Register for BPL Season 2</span>
              )}
            </motion.button>

            <p className="text-center text-white/30 text-xs font-inter">
              By registering, you agree to participate in BPL Season 2 as per the tournament rules.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
