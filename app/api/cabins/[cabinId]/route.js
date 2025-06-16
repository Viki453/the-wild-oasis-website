import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
  } catch (error) {
    return Response.json({ message: "Cabin not found" });
  }
  return Response.json({ test: "test" });
}
// export async function POST() {}
// export async function GET() {}
