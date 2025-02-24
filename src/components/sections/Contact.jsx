import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import AnimatedComponent from "../AnimatedComponent";

const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" })
    .max(30, { message: "Name must be at most 20 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .min(5, { message: "Message must be at least 5 characters" }),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data, e) {
    // console.log(e.target);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      toast.success("Message Sent!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center px-4 pt-16"
    >
      <div className="w-full">
        <AnimatedComponent>
          <div className="mx-auto max-w-xl">
            <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
              Get In Touch
            </h2>
            <form
              className="space-y-6 *:space-y-2"
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-blue-500">{errors.name.message}</p>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                  {...register("email")}
                />{" "}
                {errors.email && (
                  <p className="text-sm text-blue-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <textarea
                  rows={4}
                  placeholder="Write your wessage..."
                  className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                  {...register("message")}
                />{" "}
                {errors.message && (
                  <p className="text-sm text-blue-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </AnimatedComponent>
      </div>
    </section>
  );
}
