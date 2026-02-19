import { Mail } from 'lucide-react';

function EmailButton({
  email,
  subject = "",
  body = "",
  className = "",
  iconClassName = "",
  ...rest
}) {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <button
      type="button"
      onClick={() => window.location.href = mailto}
      className={` ${className}`}
      {...rest}
    >
      <Mail className={iconClassName} />
    </button>
  );
}

export default EmailButton;