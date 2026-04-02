import { useParams } from "react-router-dom";

export default function GalleryAdmin() {
  const { dept } = useParams();

  return (
    <div>
      <h2>{dept.toUpperCase()} Gallery</h2>
      <button>+ Add Photo</button>
    </div>
  );
}
