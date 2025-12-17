import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import ProjectView from '@/components/sections/project-view';
import { Metadata } from 'next';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} - DigitalAddis Projects`,
        description: project.content,
    };
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return <ProjectView project={project} />;
}
