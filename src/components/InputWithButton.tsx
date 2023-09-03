import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function InputWithButton() {
  return (
    // <div className="mt-4 flex flex-col   space-x-2 space-y-4 md:flex-row md:items-center">
    <div className=" mt-2 flex  flex-col  space-y-3 md:flex-row md:space-x-2 md:space-y-0">
      <Input type="email" placeholder="Email" />
      <Button className="flex" type="submit">
        Subscribe
      </Button>
    </div>
  )
}
