function Hi() {
  
  return (
    <div>
      {/* 可以在这里 添加相应的layout */}
      <div className="px-4 mt-10 ml-20 text-gray-700 dark:text-gray-200">[Hi 模版]</div>
      <Outlet />
    </div>
  );
}

export default Hi
