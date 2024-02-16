import H1 from "@/components/core/typography/H1";
import { createClient } from '@supabase/supabase-js';

const BlogIndex = async () => {
  // const data = await fetch('http://localhost:3001/api/posts');
  return (
    <H1 className="self-start">Here are some thoughts</H1>
  )
};

export default BlogIndex;
