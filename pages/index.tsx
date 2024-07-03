import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop-Next</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
      </main>
    </>
  );
}
