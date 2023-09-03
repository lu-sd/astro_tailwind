import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function InputWithButton() {
  return (
    // <div className="mt-4 flex flex-col   space-x-2 space-y-4 md:flex-row md:items-center">
    <div className="flex w-full max-w-sm items-center space-x-2 space-y-0">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}
