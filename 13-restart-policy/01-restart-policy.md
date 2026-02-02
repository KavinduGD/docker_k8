# Docker Restart Policies

| Policy           | Behavior                                                                           |
| ---------------- | ---------------------------------------------------------------------------------- |
| `no` (default)   | Do not restart the container automatically.                                        |
| `on-failure`     | Restart the container only if it exits with a **non-zero** exit code.              |
| `on-failure:N`   | Restart only up to `N` times on failure.                                           |
| `always`         | Docker will always restart the container if it stops. Even if you stop it manually, Docker will start it again when Docker itself restarts (like after a reboot). |
| `unless-stopped` | Docker will restart the container only if it wasn't manually stopped. If you stop it manually, it will stay stopped — even after Docker restarts. |
