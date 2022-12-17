function getFilesToBackup(lastBackup, changes) {
  return [
    ...new Set(
      changes
        .filter((c) => c[1] > lastBackup)
        .map((c) => c[0])
    ),
  ].sort((id1, id2) => id1 - id2);
}
