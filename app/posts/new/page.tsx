import ContentContainer from "@/components/core/containers/content-container";
import LandscapeContainer from "@/components/core/containers/landscape-container";
import checkCookie from "@/lib/checkCookie";
import { redirect } from "next/navigation";

const NewBlog = () => {
  const verifiedDan = checkCookie(
    process.env.NEXT_PUBLIC_VERIFIED_DAN_COOKIE_NAME,
    process.env.NEXT_PUBLIC_VERIFIED_DAN_COOKIE_VALUE
  );

  if (!verifiedDan) redirect('/posts/new/verify');

  return (
    <div>hi dan..this will be a form eventually</div>
  )
};

export default NewBlog;
