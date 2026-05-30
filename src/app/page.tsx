import { supabase } from "@/lib/supabase";
import CourseCard from "@/components/CourseCard";
import { motion } from "framer-motion";
export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 min-h-screen border-r border-zinc-800 p-6 flex-col">
          <h1 className="text-2xl font-bold mb-10">
            LearnX
          </h1>

          <nav className="space-y-4 text-zinc-400">
            <p className="text-white">Dashboard</p>
            <p>Courses</p>
            <p>Analytics</p>
            <p>Profile</p>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            {/* Hero Tile */}
            <div className="col-span-2 rounded-3xl p-8 bg-gradient-to-br from-violet-600/20 to-cyan-500/10 border border-zinc-800">
              <h1 className="text-4xl font-bold">
                Welcome Back 👋
              </h1>

              <p className="text-zinc-400 mt-3">
                Continue your learning journey.
              </p>

              <div className="mt-6 inline-flex rounded-full bg-orange-500/20 px-4 py-2">
                🔥 12 Day Streak
              </div>
            </div>

            {/* Activity Tile */}
            <div className="col-span-2 rounded-3xl p-8 bg-zinc-900 border border-zinc-800">
              <h2 className="text-xl font-semibold mb-4">
                Activity
              </h2>

              <div className="grid grid-cols-10 gap-2">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 w-4 rounded ${
                      Math.random() > 0.5
                        ? "bg-violet-500"
                        : "bg-zinc-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Dynamic Course Cards */}
            {courses?.map((course, index) => (
  <motion.div
    key={course.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: index * 0.15,
      duration: 0.5,
    }}
  >
    <CourseCard
      title={course.title}
      progress={course.progress}
      icon_name={course.icon_name}
    />
  </motion.div>
))}
          </div>
        </section>
      </div>
    </main>
  );
}