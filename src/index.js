import './features'

import { Cloudinary } from 'cloudinary-core/cloudinary-core-shrinkwrap'

const cl = Cloudinary.new({ 'cloud_name': 'maplekiwi' })

cl.responsive()

export default cl
