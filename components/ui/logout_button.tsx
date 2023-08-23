export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="py-2 px-4 rounded-md no-underline bg-btn-background dark:hover:bg-gray-800 hover:bg-gray-200">
        Logout
      </button>
    </form>
  );
}
