"use client";

import { Button } from "@b/components/ui/button";
import {
  Loader,
  Send,
  CheckCircle,
  AlertCircle,
  Contact,
  Contact2,
} from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import TechStacksSpinner from "@b/_icons/TechStacksSpinner";

function ContactMeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const router = useRouter(); // Initialize the router

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsError(false); // Reset error state
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setIsSubmitted(true); // Trigger success state
        // setTimeout(() => {
        //   if (
        //     document.referrer &&
        //     document.referrer.includes(window.location.origin)
        //   ) {
        //     router.back(); // Navigate to the previous page if it belongs to the app
        //   } else {
        //     router.push("/"); // Navigate to the home page as a fallback
        //   }
        // }, 3000); // Delay navigation for 3 seconds
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      setIsError(true); // Trigger error state
    }
  };

  return (
    <div className="w-full lg:w-4/5 mx-auto flex items-center max-md:flex-col max-md:justify-center max-md:p-2">
      <div className="absolute inset-0 flex max-lg:flex-col">
        <div className="h-full lg:w-1/2 overflow-visible">
          <TechStacksSpinner />
        </div>
      </div>
      <div className="md:w-1/2 w-full p-8 max-md:pb-0">
        <h1 className="font-bold text-2xl md:text-5xl md:mb-4 text-center flex items-center gap-3">
          {/* <Contact2 className="size-16" /> */}
          <span>Let&apos;s Talk</span>
        </h1>
        <div className="">
          <p className="md:text-sm text-xs md:mb-4">
            Have a project in mind or need some guidance? Don&apos;t hesitate to
            reach out! Let&apos;s chat about how I can bring your vision to
            life. Get in touch today, and let&apos;s start transforming your
            ideas into a stunning reality within just 24 hours. I&apos;m here to
            make sure your project is a success — no delays, just results. ✨
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`shadow-lg rounded-lg p-8 max-md:mt-5 md:w-1/2 w-full transition-all border border-solid border-muted bg-white/10 backdrop-blur-sm duration-500 ${
          isSubmitted ? "h-32 flex items-center justify-center" : "h-auto"
        }`}>
        {!isSubmitted && !isError ? (
          <>
            <h2 className="text-2xl font-bold md:mb-6 mb-3 text-center">
              Contact Me
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-500 md:rounded-lg rounded-sm md:p-3 p-1.5 max-md:px-3 bg-background max-md:text-xs focus:ring-2"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email<span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-500 md:rounded-lg rounded-sm md:p-3 p-1.5 max-md:px-3 bg-background max-md:text-xs focus:ring-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="subject">
                Subject<span className="text-red-400">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-500 md:rounded-lg rounded-sm md:p-3 p-1.5 max-md:px-3 bg-background max-md:text-xs focus:ring-2 px-3"
                required>
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="interview">Interview Request</option>
                <option value="request-callback">Request Callback</option>
                <option value="discuss-project">Discuss Project</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="general-inquiry">General Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message">
                Message<span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-500 md:rounded-lg rounded-sm md:p-3 p-1.5 max-md:px-3 bg-background max-md:text-xs focus:ring-2 resize-none"
                rows={5}
                placeholder="Write your message here..."
                autoComplete="on"
                autoCorrect="on"
                autoCapitalize="sentences"
                spellCheck={true}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full flex items-center justify-center">
              {status === "Sending..." ? (
                <Loader className="h-5 w-5 mr-2 animate-spin" />
              ) : (
                <Send className="h-5 w-5 mr-2" />
              )}
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </Button>
          </>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-lg font-medium mb-4">{status}</p>
            <Button
              variant={"destructive"}
              onClick={() => setIsError(false)}
              className=" px-6 py-2 rounded-lg transition">
              Retry
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-dvh">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <p className="text-lg font-medium">Message Sent Successfully!</p>
            <Button className="pt-3" onClick={() => router.push("/")}>
              Back to Home page
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactMeForm;
