"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSmoothScroll from "../Hooks/ScrollAnim/useScrollAnim";
import ButtonAmin from "../AnimComponents/ButtonAmin/ButtonAmin";
import axios from "axios";

const Page = () => {
      useSmoothScroll();
      const [clientIP, setClientIP] = useState("");
      const [messageLoading, setMessageLoading] = useState(false);

      const {
            register,
            handleSubmit,
            formState: { errors },
            reset,
      } = useForm();

      // Fetch client's IP address
      useEffect(() => {
            const fetchIP = async () => {
                  try {
                        const res = await axios.get(
                              "https://api.ipify.org?format=json"
                        );
                        setClientIP(res.data.ip); // Set the client's IP
                  } catch (error) {
                        console.error("Error fetching client IP:", error);
                  }
            };

            fetchIP();
      }, []);

      const handleFormDetails = async (data) => {
            try {
                  const res = await axios.post(
                        "https://portfolio-backend-lime-seven.vercel.app/api/v1/client",
                        {
                              orgName: data.orgName,
                              clientName: data.clientName,
                              clientEmail: data.clientEmail,
                              clientMessage: data.clientMessage,
                              reqService: data.reqService,
                              clientIP: clientIP, // Send the client's IP
                        }
                  );
                  console.log(res);
                  // Handle success
                  if (res.status === 200) {
                        alert("Form submitted successfully!");
                        setMessageLoading(false); // Stop loading
                        reset(); // Reset the form if using react-hook-form's reset function
                  }
            } catch (error) {
                  // Handle error
                  console.error("Error submitting the form:", error);
                  alert(
                        "There was an issue submitting the form. Please try again."
                  );
            }
      };

      return (
            <div className="min-h-screen my-10 lg:my-32">
                  <div
                        style={{
                              padding: "0px calc(clamp(2.5em, 8vw, 8em) * 1.7)",
                        }}
                  >
                        <h1 className="text-[4vw]">
                              Contact with me,
                              <br />
                              And Let&apos;s start <br />a new project together
                        </h1>

                        <div className="flex items-start justify-between gap-6">
                              <div className="w-[60%]">
                                    <form
                                          onSubmit={handleSubmit(
                                                handleFormDetails
                                          )}
                                    >
                                          {/* Name Field */}
                                          <div className="mb-5 py-5 flex flex-col items-start justify-start gap-6">
                                                <label
                                                      htmlFor="contact_name"
                                                      className="text-black ml-1 text-[1.3em] leading-8"
                                                >
                                                      Enter your name
                                                </label>
                                                <input
                                                      id="contact_name"
                                                      autoComplete="off"
                                                      placeholder="Esrak Fahim*"
                                                      type="text"
                                                      {...register(
                                                            "clientName",
                                                            {
                                                                  required: "Name is required",
                                                            }
                                                      )}
                                                      className="w-full border-b border-neutral-300 py-4 px-2 rounded-md block outline-none text-[1.3rem]"
                                                />
                                                {errors.clientName && (
                                                      <p className="text-red-600">
                                                            {
                                                                  errors
                                                                        .clientName
                                                                        ?.message
                                                            }
                                                      </p>
                                                )}
                                          </div>

                                          {/* Email Field */}
                                          <div className="mb-5 py-5 flex flex-col items-start justify-start gap-6">
                                                <label
                                                      htmlFor="client_email"
                                                      className="text-black ml-1 text-[1.3em] leading-8"
                                                >
                                                      Enter your email
                                                </label>
                                                <input
                                                      id="client_email"
                                                      autoComplete="off"
                                                      placeholder="info@esrakfahim.me*"
                                                      type="email"
                                                      {...register(
                                                            "clientEmail",
                                                            {
                                                                  required: "Email is required",
                                                            }
                                                      )}
                                                      className="w-full border-b border-neutral-300 py-4 px-2 rounded-md block outline-none text-[1.3rem]"
                                                />
                                                {errors.clientEmail && (
                                                      <p className="text-red-600">
                                                            {
                                                                  errors
                                                                        .clientEmail
                                                                        ?.message
                                                            }
                                                      </p>
                                                )}
                                          </div>

                                          {/* Organization Name Field */}
                                          <div className="mb-5 py-5 flex flex-col items-start justify-start gap-6">
                                                <label
                                                      htmlFor="organization_name"
                                                      className="text-black ml-1 text-[1.3em] leading-8"
                                                >
                                                      Enter your organization
                                                      name
                                                </label>
                                                <input
                                                      id="organization_name"
                                                      autoComplete="off"
                                                      placeholder="Esrak Fahim Co. Ltd.*"
                                                      type="text"
                                                      {...register("orgName", {
                                                            required: "Organization Name is required",
                                                      })}
                                                      className="w-full border-b border-neutral-300 py-4 px-2 rounded-md block outline-none text-[1.3rem]"
                                                />
                                                {errors.orgName && (
                                                      <p className="text-red-600">
                                                            {
                                                                  errors.orgName
                                                                        ?.message
                                                            }
                                                      </p>
                                                )}
                                          </div>

                                          {/* Required Service Field */}
                                          <div className="mb-5 py-5 flex flex-col items-start justify-start gap-6">
                                                <label
                                                      htmlFor="required_service"
                                                      className="text-black ml-1 text-[1.3em] leading-8"
                                                >
                                                      Enter your required
                                                      service
                                                </label>
                                                <input
                                                      id="required_service"
                                                      autoComplete="off"
                                                      placeholder="Web Development or Web Design"
                                                      type="text"
                                                      {...register(
                                                            "reqService",
                                                            {
                                                                  // required: "Required Service is required",
                                                            }
                                                      )}
                                                      className="w-full border-b border-neutral-300 py-4 px-2 rounded-md block outline-none text-[1.3rem]"
                                                />
                                                {errors.reqService && (
                                                      <p className="text-red-600">
                                                            {
                                                                  errors
                                                                        .reqService
                                                                        ?.message
                                                            }
                                                      </p>
                                                )}
                                          </div>

                                          {/* Client Message Field */}
                                          <div className="mb-5 py-5 flex flex-col items-start justify-start gap-6">
                                                <label
                                                      htmlFor="client_message"
                                                      className="text-black ml-1 text-[1.3em] leading-8"
                                                >
                                                      Drop your message
                                                </label>
                                                <textarea
                                                      id="client_message"
                                                      autoComplete="off"
                                                      placeholder="Your Message*"
                                                      {...register(
                                                            "clientMessage",
                                                            {
                                                                  required: "Your message is required",
                                                            }
                                                      )}
                                                      className="w-full border-b border-neutral-300 py-4 px-2 rounded-md block outline-none text-[1.3rem]"
                                                />
                                                {errors.clientMessage && (
                                                      <p className="text-red-600">
                                                            {
                                                                  errors
                                                                        .clientMessage
                                                                        ?.message
                                                            }
                                                      </p>
                                                )}
                                          </div>

                                          {/* Submit Button */}
                                          <div className="flex justify-end my-4">
                                                <ButtonAmin
                                                      rounded={true}
                                                      width="100px"
                                                      height="100px"
                                                      buttonBg="white"
                                                >
                                                      <button
                                                            type="submit"
                                                            className={
                                                                  messageLoading
                                                                        ? "disabled:opacity-50"
                                                                        : ""
                                                            }
                                                            disabled={
                                                                  messageLoading
                                                            } // Disable the button when loading
                                                            onClick={() =>
                                                                  setMessageLoading(
                                                                        true
                                                                  )
                                                            } // Start loading on click
                                                      >
                                                            {messageLoading ? (
                                                                  <span className="loader" />
                                                            ) : (
                                                                  <span>
                                                                        Submit
                                                                  </span>
                                                            )}
                                                      </button>
                                                </ButtonAmin>
                                          </div>
                                    </form>
                              </div>

                              {/* Placeholder for right side */}
                              <div
                                    data-parallax
                                    data-speed="0.2" // Control the parallax speed
                                    className="w-[30%] "
                              >
                                    <div>
                                          <div className="my-6">
                                                <span className="text-neutral-400 my-6">
                                                      Contact Details:
                                                </span>
                                          </div>
                                          <div className="flex flex-col items-start justify-start gap-5 px-3 text-xl">
                                                <span className="text-neutral-500">
                                                      <a
                                                            href="mailto:info@esrakfahim.me"
                                                            className="text-neutral-700 hover:underline"
                                                      >
                                                            info@esrakfahim.me
                                                      </a>
                                                </span>
                                                <span className="text-neutral-500">
                                                      <a
                                                            href="https://wa.me/01923310656"
                                                            className="text-neutral-700 hover:underline"
                                                      >
                                                            +880 1923310656
                                                      </a>
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Page;
