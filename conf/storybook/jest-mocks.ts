import uuid from '../../packages/modul-components/src/utils/uuid/uuid';

jest.mock('../../packages/modul-components/src/utils/uuid/uuid');
(uuid.generate as jest.Mock).mockReturnValue('uuid');
