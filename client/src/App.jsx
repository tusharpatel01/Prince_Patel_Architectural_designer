import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Placeholder from './pages/Placeholder';

// [path, title, phase that builds it]
const routes = [
  ['services', 'Services', 'Phase 2'], ['services/:slug', 'Service Details', 'Phase 2'],
  ['projects', 'Projects', 'Phase 2'], ['projects/:slug', 'Project Details', 'Phase 2'],
  ['floor-plans', '2D Floor Plan Gallery', 'Phase 2'], ['elevations', '3D Elevation Gallery', 'Phase 2'],
  ['plot-finder', 'Plot-Based Design Finder', 'Phase 2'],
  ['requirement-builder', 'House Design Requirement Builder', 'Phase 4'],
  ['budget-estimator', 'Construction Budget Estimator', 'Phase 4'],
  ['about', 'About Prince', 'Phase 2'], ['process', 'Design Process', 'Phase 2'],
  ['pricing', 'Pricing and Packages', 'Phase 4'], ['faq', 'Frequently Asked Questions', 'Phase 2'],
  ['contact', 'Contact', 'Phase 3'], ['request-quote', 'Request a Quote', 'Phase 3'],
  ['blog', 'Design Guides', 'Phase 5'], ['blog/:slug', 'Guide', 'Phase 5'],
  ['privacy', 'Privacy Policy', 'Phase 2'], ['terms', 'Terms and Conditions', 'Phase 2'],
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {routes.map(([path, title, phase]) => (
          <Route key={path} path={path} element={<Placeholder title={title} phase={phase} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
