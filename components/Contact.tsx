import Button from "./Button";
import TextArea from "./TextArea";
import TextField from "./TextField";

export default function Contact() {
  return (
    <section className="flex flex-col items-center w-full pt-32">
      <h3 className="text-3xl font-bold w-96 text-center">
        DISCOVER BOUNDLESS EXCELLENCE!
      </h3>
      <p className="text-neutral-500 py-4">Get in touch with us.</p>
      <div className="flex flex-col items-center px-10 py-6 rounded-2xl border-[1px] border-neutral-900">
        <TextField name="name" placeholder="Name" />
        <TextField name="email" placeholder="Email Address" type="email" />
        <TextField name="company" placeholder="Company Name" />
        <TextArea name="message" placeholder="Message" />
        <div className="pt-5">
          <Button>Send</Button>
        </div>
      </div>
    </section>
  );
}
