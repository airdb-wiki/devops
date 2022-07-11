# CICD

# Environment variables

RunEnv

| Env | Description |
| --- | --- |
| local | Run services on local PC |
| dev | Run services on servers, but not serve traffic|
| live | Run services on servers,  but serve users' traffic|

RunAZ: Availability zones (AZs)

| AZ | Description |
| --- | --- |
| sg | Singapore |
| sh | Shanghai |
| de | Germany |

ServerType
| serverType | Description |
| --- | --- |
| physical | physical servers |
| vm | virtural servers |

RunContext
| RunContext | Description |
| --- | --- |
| docker | Run Service with docker |
| systemd | Run services with systemctl |

DeployPolicy

| Policy | Description |
| --- | --- |
| blue | Blue strategy serves about at 0-20% traffic. |
| green | Green strategy serves about at 20-50% traffic. |
| red | Red strategy serves about at 50-100% traffic.|
| black | Black strategy is for hot back, can serves all(100%) traffic.|


git

github

gitlab

github action

https://github.com/Naturalclar/issue-action
https://github.com/actions/hello-world-docker-action
https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#targetText=Default%20environment%20variables&targetText=GitHub%20sets%20environment%20variables%20for%20actions%20to%20use%20in%20all%20virtual%20environments.&targetText=The%20path%20to%20the%20GitHub,example%2C%20%2Fgithub%2Fhome%20.&targetText=The%20name%20of%20the%20person%20or%20app%20that%20initiated%20the%20workflow.

https://vsoch.github.io//2019/nushell-plugin-golang/?nsukey=umEen7ZvvmtEpp%2BYrbmTk%2BOcckIcapAzeQM06y9mLR5mP2tNpynkXYb4Z%2BwgpzPoNqjjukZUb8k591FwbkfaR%2BNOHFD2aXs%2Foyef3Rugtr%2BqKahK4WfbwRIgirmxDVNDE%2F3QeS9sUJ4P1Eqt%2BsNGr6kWWuGlwkZypK8rCFa00icFKTxzGPBfQxyeNDDveVxSHVtsXzgjxGSpOG0mBQP0uA%3D%3D

automation testing
