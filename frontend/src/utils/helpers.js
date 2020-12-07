import DOMPurify from "dompurify";

export const sanitize = (content) => {
  // DOM not available on server side, so only sanitize on client side
  return process.browser ? DOMPurify.sanitize(content) : content;
};
