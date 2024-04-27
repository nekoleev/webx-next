import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"


export default function Home() {
  return (
    <>
      
      <Button>Click me</Button>
      <Link className={buttonVariants({ variant: "outline" })} href={`about`}>Click here</Link>
      <Button asChild>
        <Link href="/about">About3</Link>
      </Button>
    </>
  );
}