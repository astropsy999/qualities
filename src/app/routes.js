import AddQualityPage from './pages/addQuality';
import EditQualityPage from './pages/editQuality';
import QualitiesListPage from './pages/qualititesList';

const routes = [
  { path: '/add', name: 'Додати', component: AddQualityPage },
  {
    path: '/edit/:id',
    display: false,
    name: 'Редагувати',
    component: EditQualityPage,
  },
  {
    path: '/',
    name: 'Список якостей',
    display: false,
    component: QualitiesListPage,
  },
];

export default routes;
