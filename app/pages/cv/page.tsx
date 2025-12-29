"use client";

import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Cv.module.css";

type FormValues = {
    name: string;
    company: string;
    comments?: string;
};

export default function CVPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        const subject = `Website contact from ${data.name}`;
        const body = `Name: ${data.name}\nCompany: ${data.company}\n\nComments:\n${data.comments ?? ""}`;
        const mailto = `mailto:nickshwrd@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
        reset();
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
                        >
                            Request CV
                        </button>
                        <div className={styles.helperText}>
                            You will be taken to your email client to send the request.
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}