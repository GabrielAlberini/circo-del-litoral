import "./Contacto.css";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";

const Contacto = () => {
  return (
    <Layout>
      <Banner />
      <p>Contacto</p>
      <form
        action="https://formsubmit.co/gabialberini733@gmail.com"
        method="POST"
      >
        <div class="mb-3">
          <label class="form-label">Full Name</label>
          <input name="name" type="text" class="form-control" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input name="email" type="email" class="form-control" required />
          <div id="emailHelp" class="form-text">
            Don't worry, we won't share it with anyone else.
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Phone (optional)</label>
          <input name="phone" class="form-control" />
          <div id="phoneHelp" class="form-text">
            If you rather talk to a human directly.
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Your Message</label>
          <textarea
            name="message"
            class="form-control"
            rows="3"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export { Contacto };
