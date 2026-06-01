import type { BlogPost, FAQ, Testimonial } from "@prisma/client";
import { deleteBlogPost, deleteProgram, updateLeadStatus, upsertBlogPost, upsertFaq, upsertProgram, upsertTestimonial } from "@/lib/actions";

type AdminProgram = {
  id?: string;
  name?: string;
  category?: string;
  buyRate?: number | string;
  sellRate?: number | string;
  spread?: number | string;
  minimumPoints?: number;
  active?: boolean;
  description?: string | null;
};

export function LeadStatusForm({ id, status }: { id: string; status: string }) {
  return (
    <form action={updateLeadStatus} className="flex gap-2">
      <input type="hidden" name="id" value={id} />
      <select name="status" defaultValue={status} className="h-9 rounded-md border px-2 text-sm">
        {["NEW", "CONTACTED", "IN_NEGOTIATION", "CLOSED", "LOST"].map((s) => <option key={s}>{s}</option>)}
      </select>
      <button className="rounded-md bg-black px-3 text-sm font-semibold text-white">Save</button>
    </form>
  );
}

export function ProgramForm({ program }: { program?: AdminProgram }) {
  return (
    <form action={upsertProgram} className="grid gap-4 rounded-lg border bg-white p-5">
      <input type="hidden" name="id" value={program?.id || ""} />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Program name
          <input className="rounded-md border px-3 py-2 text-sm" name="name" defaultValue={program?.name} placeholder="e.g. Marriott Bonvoy" required />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Category
          <select className="rounded-md border px-3 py-2 text-sm" name="category" defaultValue={program?.category || "HOTEL"}>
            <option value="HOTEL">Hotel</option>
            <option value="AIRLINE">Airline</option>
            <option value="CREDIT_CARD">Credit Card</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-1.5 text-sm font-medium">
          Buy rate
          <input
            className="rounded-md border px-3 py-2 text-sm"
            name="buyRate"
            type="number"
            step="0.00001"
            min="0"
            defaultValue={program?.buyRate}
            placeholder="e.g. 0.008"
            required
          />
          <span className="text-xs text-neutral-400">$ per point you pay the customer</span>
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Sell rate
          <input
            className="rounded-md border px-3 py-2 text-sm"
            name="sellRate"
            type="number"
            step="0.00001"
            min="0"
            defaultValue={program?.sellRate}
            placeholder="e.g. 0.012"
            required
          />
          <span className="text-xs text-neutral-400">$ per point you sell for</span>
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Minimum buy
          <input
            className="rounded-md border px-3 py-2 text-sm"
            name="minimumPoints"
            type="number"
            defaultValue={program?.minimumPoints || 25000}
            placeholder="e.g. 25000"
            required
          />
          <span className="text-xs text-neutral-400">Smallest points balance you'll buy</span>
        </label>
      </div>

      <input type="hidden" name="spread" value="0" />

      <label className="grid gap-1.5 text-sm font-medium">
        Description <span className="font-normal text-neutral-500">(optional, shown on programs page)</span>
        <textarea className="rounded-md border px-3 py-2 text-sm" name="description" defaultValue={program?.description || ""} placeholder="Short description of this program…" rows={2} />
      </label>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium">
          <input type="checkbox" name="active" defaultChecked={program?.active ?? true} />
          Active (visible to customers)
        </label>
        <button className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-black hover:bg-accent active:scale-[0.97] transition-all">
          Save Program
        </button>
      </div>
    </form>
  );
}

export function DeleteProgramForm({ id }: { id: string }) {
  return <form action={deleteProgram}><input type="hidden" name="id" value={id} /><button className="text-sm font-semibold text-red-700">Delete</button></form>;
}

export function BlogPostForm({ post }: { post?: Partial<BlogPost> }) {
  return (
    <form action={upsertBlogPost} className="grid gap-3 rounded-lg border bg-white p-5">
      <input type="hidden" name="id" value={post?.id || ""} />
      <input className="rounded-md border px-3 py-2" name="title" defaultValue={post?.title} placeholder="Title" required />
      <input className="rounded-md border px-3 py-2" name="excerpt" defaultValue={post?.excerpt} placeholder="Excerpt" required />
      <textarea className="min-h-40 rounded-md border px-3 py-2" name="content" defaultValue={post?.content} placeholder="Content" required />
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="published" defaultChecked={post?.published ?? true} /> Published</label>
      <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-black">Save Post</button>
    </form>
  );
}

export function DeleteBlogPostForm({ id }: { id: string }) {
  return <form action={deleteBlogPost}><input type="hidden" name="id" value={id} /><button className="text-sm font-semibold text-red-700">Delete</button></form>;
}

export function FAQForm({ faq }: { faq?: Partial<FAQ> }) {
  return (
    <form action={upsertFaq} className="grid gap-3 rounded-lg border bg-white p-5">
      <input type="hidden" name="id" value={faq?.id || ""} />
      <input className="rounded-md border px-3 py-2" name="question" defaultValue={faq?.question} placeholder="Question" required />
      <textarea className="rounded-md border px-3 py-2" name="answer" defaultValue={faq?.answer} placeholder="Answer" required />
      <input className="rounded-md border px-3 py-2" name="category" defaultValue={faq?.category || "General"} placeholder="Category" />
      <input className="rounded-md border px-3 py-2" name="order" type="number" defaultValue={faq?.order || 0} placeholder="Order" />
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="active" defaultChecked={faq?.active ?? true} /> Active</label>
      <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-black">Save FAQ</button>
    </form>
  );
}

export function TestimonialForm({ testimonial }: { testimonial?: Partial<Testimonial> }) {
  return (
    <form action={upsertTestimonial} className="grid gap-3 rounded-lg border bg-white p-5">
      <input type="hidden" name="id" value={testimonial?.id || ""} />
      <input className="rounded-md border px-3 py-2" name="name" defaultValue={testimonial?.name} placeholder="Name" required />
      <input className="rounded-md border px-3 py-2" name="role" defaultValue={testimonial?.role || ""} placeholder="Role" />
      <textarea className="rounded-md border px-3 py-2" name="quote" defaultValue={testimonial?.quote} placeholder="Quote" required />
      <input className="rounded-md border px-3 py-2" name="rating" type="number" min="1" max="5" defaultValue={testimonial?.rating || 5} />
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="active" defaultChecked={testimonial?.active ?? true} /> Active</label>
      <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-black">Save Testimonial</button>
    </form>
  );
}
