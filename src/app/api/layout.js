// app/api/layout.js
export const dynamic = 'force-dynamic';
// 空布局，仅用于全局继承动态渲染配置
export default function ApiLayout({ children }) {
  return children;
}
