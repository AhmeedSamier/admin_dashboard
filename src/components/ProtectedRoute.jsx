import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // 🔑 يجب التأكد من صحة مسار الاستيراد

/**
 * مكون لحماية المسارات: يسمح بالوصول فقط إذا كان المستخدم مسجلاً للدخول.
 *
 * @returns {JSX.Element}
 */
const ProtectedRoute = () => {
  // 1. استخدام هوك useAuth لجلب حالة المستخدم الحالي
  const { currentUser } = useAuth();

  // 2. التحقق من حالة المستخدم
  
  // إذا كان هناك مستخدم (مسجل للدخول)، اعرض المحتوى المتداخل (المسار الفرعي).
  if (currentUser) {
    return <Outlet />;
  }

  // إذا لم يكن هناك مستخدم، أعد توجيهه إلى صفحة تسجيل الدخول.
  // replace: لمنع المستخدم من الرجوع لصفحة لوحة القيادة باستخدام زر العودة في المتصفح.
  return <Navigate to="/signin" replace />;
};

export default ProtectedRoute;