import H1 from "@/components/core/typography/H1";
import { createClient } from '@supabase/supabase-js';

const BlogIndex = async () => {
  const supabase = createClient(process.env.SUPABASE_URL ?? '', process.env.SUPABASE_KEY ?? '', {
    global: { fetch: fetch.bind(globalThis) }
  });
  return (
    <H1 className="self-start">Here are some thoughts</H1>
  )
};

export default BlogIndex;
