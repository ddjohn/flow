Author: ddjohn@gmail.com

# 0. References

https://github.com/jeeeyul/meteor-openshift
https://github.com/icflorescu
https://raw.githubusercontent.com/icflorescu/openshift-cartridge-nodejs/master/metadata/manifest.yml
https://raw.githubusercontent.com/icflorescu/openshift-cartridge-mongodb/master/metadata/manifest.yml
http://stackoverflow.com/questions/14952486/setup-jenkins-job-on-opwenshift-without-creating-repo-on-openshift

# 1. Setup Jenkins server

Create Jenkins server.
Change admin passwd: https://jenkins-avelon.rhcloud.com/user/admin/configure
Add 2 executors.
Add label: nextgen-build

  User: admin
  Password: EMVrKPK4zwSu

git clone ssh://5790c3a97628e1af7a0000c8@jenkins-avelon.rhcloud.com/~/git/jenkins.git/
cd jenkins/

https://jenkins-avelon.rhcloud.com/job/flow-build/

[jenkins-avelon.rhcloud.com data]\> more wrapper.sh 
set -xv
export ID_RSA="$OPENSHIFT_DATA_DIR/.ssh/jenkins_id_rsa" 
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i $ID_RSA $*



# 2. Create deploy site

Create node.js app.
Add cartridge: https://raw.githubusercontent.com/icflorescu/openshift-cartridge-mongodb/master/metadata/manifest.yml
Enable Jenkins.

git clone ssh://5790c3cd0c1e669f7900011b@nextgen-avelon.rhcloud.com/~/git/nextgen.git/
cd nextgen/


# 3. Deploying

~/.meteor/meteor build ./build --directory --server-only
cd ../nextgen
git add --all && git commit -m "First Launch" && git push

