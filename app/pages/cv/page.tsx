"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Cv.module.css";

type FormValues = {
    name: string;
    company: string;
    comments?: string;
};

export default function CVPage() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: FormValues) => {
        setMessage(null);
        setError(null);

        // formsubmit AJAX endpoint
        const endpoint = "https://formsubmit.co/ajax/nickshwrd@gmail.com";

        // include FormSubmit hidden params
        const payload = {
            name: data.name,
            company: data.company,
            comments: data.comments ?? "",
            _subject: `CV request from ${data.name}`,
            _captcha: "false"
        };

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Accept: "application/json"
                },
                body: new URLSearchParams(payload).toString()
            });

            const json = await res.json().catch(() => ({}));
            if (!res.ok) {
                throw new Error(json?.message || `Failed (${res.status})`);
            }

            setMessage("Request sent — you'll receive a reply by email.");
            reset();
        } catch (err: any) {
            console.error("Form submit error:", err);
            setError("There was an error sending your request. Please try again later.");
        }
    };

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.formHeading}>Request a copy of my CV</h1>
            <p className={styles.formSub}>
                Fill in your details and I'll send a copy to your email.
            </p>

            <section aria-labelledby="contact-form-heading">
                <form className={styles.subFormContainer} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className={styles.inputGroup}>
                        <label className={styles.formLabel} htmlFor="name">Name</label>
                        <input
                            id="name"
                            className={styles.input}
                            {...register("name", { required: "Name is required" })}
                            type="text"
                        />
                        {errors.name && (
                            <div className={styles.error}>{errors.name.message}</div>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.formLabel} htmlFor="company">Company</label>
                        <input
                            id="company"
                            className={styles.input}
                            {...register("company", { required: "Company is required" })}
                            type="text"
                        />
                        {errors.company && (
                            <div className={styles.error}>{errors.company.message}</div>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.formLabel} htmlFor="comments">Comments (optional)</label>
                        <textarea
                            id="comments"
                            className={styles.textarea}
                            {...register("comments")}
                        />
                    </div>

                    <div className={styles.actions}>
                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending…" : "Request CV"}
                        </button>

                        <div className={styles.helperText}>
                            Your request will be sent securely from this site.
                        </div>
                    </div>

                    {message && <div className={styles.helperText} role="status">{message}</div>}
                    {error && <div className={styles.error} role="alert">{error}</div>}
                </form>
            </section>
        </div>
    );
}