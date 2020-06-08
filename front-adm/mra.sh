hg angular-gen -m emailing -o src/app ../../backend/models/emailing/model.js
hg angular-gen -m access -o src/app ../../backend/models/auth/model.access.js
hg angular-gen -m roles -o src/app ../../backend/models/auth/model.role.js
hg angular-gen -m files -o src/app ../../backend/models/files/sample.admin.js

hg angular-gen -m membership -o src/app ../../backend/models/membership/index.js
