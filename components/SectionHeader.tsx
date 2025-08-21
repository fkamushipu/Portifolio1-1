type SectionHeaderProps = {
  title: string
  highlight: string
  subtitle?: string // optional
}

export default function SectionHeader({ title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <div>
      <h3 className="uppercase flex justify-center items-center text-md tracking-wider">
        {title} <span className="text-[#FF6A3D] px-2">{highlight}</span>
      </h3>
      {subtitle && (
        <div className="flex justify-center items-center text-2xl py-4">
          <p className="w-96 tracking-tight font-semibold text-center">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  )
}
