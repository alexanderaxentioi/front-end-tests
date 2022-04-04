import {MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

export const parameters = {
    viewport: {
        viewports: MINIMAL_VIEWPORTS,
    },
    options: {
        storySort: {
            order: [
                'Design System',
                [
                    'Atoms',
                    'Molecules',
                    'Organisms',
                    'Templates',
                    'Pages',
                    'Layouts',
                ],
            ],
        },
    },
};
