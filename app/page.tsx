import { TextareaForm } from "@/components/feature/convert"

export default function IndexPage() {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Magic your text
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Input any text to convert
        </p>
      </div>

      <TextareaForm />
    </section>
  )
}
