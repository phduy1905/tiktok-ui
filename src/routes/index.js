import HeaderOnly from '~/components/Layout/HeaderOnly';
import FollowingPage from '~/pages/Following';
import HomePage from '~/pages/Home';
import SearchPage from '~/pages/Search';
import UploadPage from '~/pages/Upload';

// Public routes
export const publicRoutes = [
    { path: '/', element: HomePage },
    { path: '/following', element: FollowingPage },
    { path: '/upload', element: UploadPage, layout: HeaderOnly },
    { path: '/search', element: SearchPage, layout: null },
];

// Private routes
export const privateRoutes = [];
