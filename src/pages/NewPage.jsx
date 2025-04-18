import { Link } from 'react-router-dom';

function NewPage() {
  return (
    <div>
      <h1>🧩 這是 /newpage</h1>
      <Link to="/">回首頁</Link>
    </div>
  );
}

export default NewPage;
