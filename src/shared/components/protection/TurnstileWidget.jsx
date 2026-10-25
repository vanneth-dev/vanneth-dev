import Turnstile from "react-turnstile";

export default function TurnstileWidget({ onVerify }) {
  return (
    <Turnstile
      sitekey="YOUR_CLOUDFLARE_SITE_KEY"
      onVerify={(token) => onVerify(token)}
    />
  );
}
