import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>😵‍💫 404 找不到頁面</h1>
      <Link to="/">回首頁</Link>
    </div>
  );
}

export default NotFoundPage;
