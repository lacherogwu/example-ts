import { start, use } from '../example-lib';

start({ watchDir: './functions' });

use('items/createItem', 'users/getUser', 'users/sampleFunction');
