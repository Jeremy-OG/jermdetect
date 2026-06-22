#!/bin/sh
set -eu

if [ -z "${SLACK_WEBHOOK_URL:-}" ]; then
	echo "SLACK_WEBHOOK_URL is required" >&2
	exit 1
fi

replacement=$(printf '%s' "$SLACK_WEBHOOK_URL" | sed 's/[&|\\]/\\&/g')
sed "s|__SLACK_WEBHOOK_URL__|$replacement|g" /etc/alertmanager/alertmanager.yml > /tmp/alertmanager.yml

exec /bin/alertmanager --config.file=/tmp/alertmanager.yml --storage.path=/alertmanager
