import { BetaNav } from "../BetaNav";
import { EditorialHome } from "../../components/EditorialHome";

export default function EditorialBeta() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#141414]">
      <BetaNav current="/beta/editorial" />
      <EditorialHome />
    </main>
  );
}
