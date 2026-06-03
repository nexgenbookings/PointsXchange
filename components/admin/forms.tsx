"use client";

import { useActionState } from "react";
import { Trash2 } from "lucide-react";
import { deleteLead } from "@/lib/actions";
import type { BlogPost, FAQ, Testimonial } from "@prisma/client";
import { deleteBlogPost, deleteProgram, updateLeadStatus, upsertBlogPost, upsertFaq, upsertProgram, upsertTestimonial } from "@/lib/actions";

const inputCls = "rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-sm text-white placeholder-[#A0A0A0]/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30";
const labelCls = "grid gap-1.5 text-sm font-medium text-white";

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
      <select
        name="status"
        defaultValue={status}
        className="h-9 rounded-lg border border-white/8 bg-white/5 px-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/30"
      >
        {["NEW", "CONTACTED", "IN_NEGOTIATION", "CLOSED", "LOST"].map((s) => (
          <option key={s} className="bg-[#111]">{s}</option>
        ))}
      </select>
      <button className="rounded-lg bg-primary px-3 text-sm font-semibold text-black transition-colors hover:bg-accent">Save</button>
    </form>
  );
}

export function ProgramForm({ program }: { program?: AdminProgram }) {
  const [state, action, pending] = useActionState(upsertProgram, null);

  return (
    <form action={action} className="grid gap-4 rounded-2xl border border-white/8 bg-[#111] p-5">
      <input type="hidden" name="id" value={program?.id || ""} />

      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelCls}>
          Program name
          <input className={inputCls} name="name" defaultValue={program?.name} placeholder="e.g. Marriott Bonvoy" required />
        </label>
        <label className={labelCls}>
          Category
          <select className={inputCls} name="category" defaultValue={program?.category || "HOTEL"}>
            <option value="HOTEL" className="bg-[#111]">Hotel</option>
            <option value="AIRLINE" className="bg-[#111]">Airline</option>
            <option value="CREDIT_CARD" className="bg-[#111]">Credit Card</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className={labelCls}>
          Buy rate
          <input className={inputCls} name="buyRate" type="number" step="0.00001" min="0.00001" defaultValue={program?.buyRate as number} placeholder="e.g. 0.008" required />
          <span className="text-xs text-[#A0A0A0]">$ per point you pay the customer</span>
        </label>
        <label className={labelCls}>
          Sell rate
          <input className={inputCls} name="sellRate" type="number" step="0.00001" min="0.00001" defaultValue={program?.sellRate as number} placeholder="e.g. 0.012" required />
          <span className="text-xs text-[#A0A0A0]">$ per point you sell for</span>
        </label>
        <label className={labelCls}>
          Minimum buy
          <input className={inputCls} name="minimumPoints" type="number" defaultValue={program?.minimumPoints || 25000} placeholder="e.g. 25000" required />
          <span className="text-xs text-[#A0A0A0]">Smallest points balance you&apos;ll buy</span>
        </label>
      </div>

      <label className={labelCls}>
        Description <span className="font-normal text-[#A0A0A0]">(optional)</span>
        <textarea className={inputCls} name="description" defaultValue={program?.description || ""} placeholder="Short description of this program…" rows={2} />
      </label>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-white">
          <input type="checkbox" name="active" defaultChecked={program?.active ?? true} className="accent-primary" />
          Active (visible to customers)
        </label>
        <button
          disabled={pending}
          className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-accent active:scale-[0.97] disabled:opacity-50"
        >
          {pending ? "Saving…" : "Save Program"}
        </button>
      </div>

      {state?.message && (
        <p className={`rounded-xl px-3 py-2 text-sm font-medium ${state.ok ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}

export function DeleteProgramForm({ id }: { id: string }) {
  return (
    <form action={deleteProgram}>
      <input type="hidden" name="id" value={id} />
      <button className="text-sm font-semibold text-red-400 hover:text-red-300">Delete</button>
    </form>
  );
}

export function BlogPostForm({ post }: { post?: Partial<BlogPost> }) {
  return (
    <form action={upsertBlogPost} className="grid gap-3 rounded-2xl border border-white/8 bg-[#111] p-5">
      <input type="hidden" name="id" value={post?.id || ""} />
      <input className={inputCls} name="title" defaultValue={post?.title} placeholder="Title" required />
      <input className={inputCls} name="excerpt" defaultValue={post?.excerpt} placeholder="Excerpt" required />
      <textarea className={inputCls + " min-h-40"} name="content" defaultValue={post?.content} placeholder="Content" required />
      <label className="flex items-center gap-2 text-sm text-white">
        <input type="checkbox" name="published" defaultChecked={post?.published ?? true} className="accent-primary" /> Published
      </label>
      <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-accent">Save Post</button>
    </form>
  );
}

export function DeleteBlogPostForm({ id }: { id: string }) {
  return (
    <form action={deleteBlogPost}>
      <input type="hidden" name="id" value={id} />
      <button className="text-sm font-semibold text-red-400 hover:text-red-300">Delete</button>
    </form>
  );
}

export function DeleteLeadForm({ id }: { id: string }) {
  return (
    <form
      action={deleteLead}
      onSubmit={(e) => {
        if (!confirm("Delete this lead? This cannot be undone.")) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="grid size-8 place-items-center rounded-lg text-[#A0A0A0] transition-colors hover:bg-red-500/10 hover:text-red-400"
        title="Delete lead"
      >
        <Trash2 className="size-4" />
      </button>
    </form>
  );
}

export function FAQForm({ faq }: { faq?: Partial<FAQ> }) {
  return (
    <form action={upsertFaq} className="grid gap-3 rounded-2xl border border-white/8 bg-[#111] p-5">
      <input type="hidden" name="id" value={faq?.id || ""} />
      <input className={inputCls} name="question" defaultValue={faq?.question} placeholder="Question" required />
      <textarea className={inputCls} name="answer" defaultValue={faq?.answer} placeholder="Answer" required />
      <input className={inputCls} name="category" defaultValue={faq?.category || "General"} placeholder="Category" />
      <input className={inputCls} name="order" type="number" defaultValue={faq?.order || 0} placeholder="Order" />
      <label className="flex items-center gap-2 text-sm text-white">
        <input type="checkbox" name="active" defaultChecked={faq?.active ?? true} className="accent-primary" /> Active
      </label>
      <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-accent">Save FAQ</button>
    </form>
  );
}

export function TestimonialForm({ testimonial }: { testimonial?: Partial<Testimonial> }) {
  return (
    <form action={upsertTestimonial} className="grid gap-3 rounded-2xl border border-white/8 bg-[#111] p-5">
      <input type="hidden" name="id" value={testimonial?.id || ""} />
      <input className={inputCls} name="name" defaultValue={testimonial?.name} placeholder="Name" required />
      <input className={inputCls} name="role" defaultValue={testimonial?.role || ""} placeholder="Role" />
      <textarea className={inputCls} name="quote" defaultValue={testimonial?.quote} placeholder="Quote" required />
      <input className={inputCls} name="rating" type="number" min="1" max="5" defaultValue={testimonial?.rating || 5} />
      <label className="flex items-center gap-2 text-sm text-white">
        <input type="checkbox" name="active" defaultChecked={testimonial?.active ?? true} className="accent-primary" /> Active
      </label>
      <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-accent">Save Testimonial</button>
    </form>
  );
}
