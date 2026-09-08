import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [toastOpen, setToastOpen] = useState(false);
  // Handle controlled input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Watch for successful Formspree submission
  useEffect(() => {
    if (state.succeeded) {
      setToastOpen(true);
      setFormData({ name: '', email: '', message: '' }); // Clear input fields
    }
  }, [state.succeeded]);

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') return;
    setToastOpen(false);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-gray-50 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
            Contact
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Get in touch
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-semibold">Let's talk.</h3>

            <p className="mt-5 max-w-lg leading-7 text-gray-600">
              Have a project in mind, want to discuss an idea, or simply want to
              connect? Feel free to reach out. I'm always interested in hearing
              about new projects and opportunities to learn and build.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <EmailIcon className="text-gray-500" />
                <span>mcgrafixdesigns@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <PhoneInTalkIcon className="text-gray-500" />
                <span>+254-795-657-443</span>
              </div>

              <div className="flex items-center gap-4">
                <LocationPinIcon className="text-gray-500" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Form */}
          {/* <form className="flex w-full flex-col gap-5 space-y-5">
            <TextField fullWidth label="Name" variant="outlined" size="small" />

            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              size="small"
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={5}
              placeholder="Tell me a little about your project..."
            />

            <button
              type="submit"
              className="rounded-full border border-gray-900 px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-gray-900 hover:text-white cursor-pointer"
            >
              Send Message
              <SendIcon className="ml-3" fontSize="small" />
            </button>
          </form> */}

          {/* With Formspree integration */}
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
            <div>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                size="small"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="mt-1 text-xs text-red-500"
              />
            </div>

            <div>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                size="small"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-1 text-xs text-red-500"
              />
            </div>

            <div>
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Message"
                multiline
                rows={5}
                placeholder="Tell me a little about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-1 text-xs text-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="flex items-center justify-center rounded-full border border-gray-900 px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-gray-900 hover:text-white cursor-pointer disabled:opacity-50"
            >
              {state.submitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <SendIcon className="ml-3" fontSize="small" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      {/* Material UI Toast Notification */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
