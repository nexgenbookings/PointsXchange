import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { BlogPostForm, DeleteBlogPostForm } from "@/components/admin/forms";
import { isAdminAuthenticated } from "@/lib/auth";
import { getBlogPosts } from "@/lib/data";

export default async function AdminBlogPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  const posts = await getBlogPosts();
  return (
    <AdminShell>
      <h2 className="font-serif text-3xl font-semibold">Blog Management</h2>
      <div className="mt-6"><BlogPostForm /></div>
      <div className="mt-8 grid gap-5">
        {posts.map((post) => <div key={post.id} className="grid gap-3 rounded-lg border bg-white p-5"><BlogPostForm post={post} /><DeleteBlogPostForm id={post.id} /></div>)}
      </div>
    </AdminShell>
  );
}
