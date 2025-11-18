export default function ContactPage() {
    return (
        <div>
            <h1>Contact Me</h1>

            <p>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>

            <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const message = (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value;
                    alert(`Email would be sent with message: ${message}`);
                }}
            >
                <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows={6}
                    style={{ width: "100%", padding: "1rem", marginTop: "1rem" }}
                />
                <button type="submit" style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
                    Send Email
                </button>
            </form>
        </div>
    );
}