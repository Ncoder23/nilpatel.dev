
const Contact = () => {
    return (
        <section id="contact" className="py-16 px-6 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
            <form className="max-w-lg mx-auto">
                <input type="text" placeholder="Name" className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white" />
                <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white" />
                <textarea placeholder="Message" className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"></textarea>
                <button type="submit" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;