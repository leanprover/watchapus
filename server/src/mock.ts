const MOCK_BASE = new Date("Wed Jul 15 20:47:59 2026").getTime();
const MOCK_START = Date.now();
export const mockNow = () => MOCK_BASE + (Date.now() - MOCK_START);

export const MOCK_PS = `
USER         PID    PPID                  STARTED     TIME   USS   PSS %MEM COMMAND
lean4web  130660  130659 Wed Jul 15 17:28:39 2026        4 264596 265630  0.2 lean --server -Dexperimental.module=true
lean4web  138148  138147 Wed Jul 15 17:29:22 2026        4 270064 271094  0.2 lean --server -Dexperimental.module=true
lean4web  142886  130660 Wed Jul 15 17:29:57 2026        2 141724 270569  1.2 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web  164960 4173591 Wed Jul 15 17:32:20 2026       32 374140 948329  2.5 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web  199597  199596 Wed Jul 15 17:35:57 2026       11 388548 389591  0.3 lean --server -Dexperimental.module=true
lean4web  199607  199597 Wed Jul 15 17:35:57 2026       58 1044132 3012838  5.5 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web  304323  138148 Wed Jul 15 17:46:53 2026       33 683640 2590292  5.2 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web  313102  313100 Tue Jul 14 14:34:22 2026       30 1193076 1194117  0.9 lean --server -Dexperimental.module=true
lean4web  329801  313102 Tue Jul 14 14:35:48 2026      412 946888 979844  1.5 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web  400172 3553633 Wed Jul 15 18:00:25 2026       50 506584 541147  0.4 /lean/bin/lean --worker -Dexperimental.module=true file:///mathlib-v4.28.0/mathlib-v4.28.0.lean
lean4web  442465  442454 Wed Jul 15 18:04:20 2026        0 70112 89737  0.5 /home/lean4web/.elan/toolchains/leanprover--lean4---v4.32.0/bin/lake -d ../mathlib4 env .lake/build/bin/loogle --json --interactive
lean4web  442468  442454 Wed Jul 15 18:04:20 2026        0 70116 90848  0.6 /home/lean4web/.elan/toolchains/leanprover--lean4---v4.32.0/bin/lake -d ../mathlib4 env .lake/build/bin/loogle --json --interactive
lean4web  442471  442454 Wed Jul 15 18:04:20 2026        0 70524 91246  0.6 /home/lean4web/.elan/toolchains/leanprover--lean4---v4.32.0/bin/lake -d ../mathlib4 env .lake/build/bin/loogle --json --interactive
lean4web  442475  442454 Wed Jul 15 18:04:20 2026        0 70136 89873  0.5 /home/lean4web/.elan/toolchains/leanprover--lean4---v4.32.0/bin/lake -d ../mathlib4 env .lake/build/bin/loogle --json --interactive
lean4web  442484  442454 Wed Jul 15 18:04:20 2026        0 69564 90274  0.6 /home/lean4web/.elan/toolchains/leanprover--lean4---v4.32.0/bin/lake -d ../mathlib4 env .lake/build/bin/loogle --json --interactive
lean4web  442485  442454 Wed Jul 15 18:04:20 2026        0 70112 89744  0.5 /home/lean4web/.elan/toolchains/leanprover--lean4---v4.32.0/bin/lake -d ../mathlib4 env .lake/build/bin/loogle --json --interactive
lean4web  442486  442454 Wed Jul 15 18:04:20 2026        0 70044 90708  0.6 /home/lean4web/.elan/toolchains/leanprover--lean4---v4.32.0/bin/lake -d ../mathlib4 env .lake/build/bin/loogle --json --interactive
lean4web  442490  442454 Wed Jul 15 18:04:20 2026        0 70528 90294  0.5 /home/lean4web/.elan/toolchains/leanprover--lean4---v4.32.0/bin/lake -d ../mathlib4 env .lake/build/bin/loogle --json --interactive
lean4web  703990  703989 Wed Jul 15 18:36:36 2026        5 275104 276147  0.2 lean --server -Dexperimental.module=true
lean4web  704020  703990 Wed Jul 15 18:36:37 2026       14 530608 990558  4.6 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web  777110  777109 Wed Jul 15 18:44:49 2026        4 273500 274544  0.2 lean --server -Dexperimental.module=true
lean4web  780922  777110 Wed Jul 15 18:45:16 2026       10 482708 946984  4.6 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web  871864  871863 Wed Jul 15 19:00:58 2026        5 343920 344963  0.3 lean --server -Dexperimental.module=true
lean4web  883721  871864 Wed Jul 15 19:03:08 2026       24 728100 1208863  4.9 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web  902894  442454 Wed Jul 15 19:07:38 2026        0 68332 88936  0.6 /home/lean4web/.elan/toolchains/leanprover--lean4---v4.32.0/bin/lake -d ../mathlib4 env .lake/build/bin/loogle --json --interactive
lean4web  943822  943821 Wed Jul 15 19:20:46 2026        4 272536 273579  0.2 lean --server -Dexperimental.module=true
lean4web  943833  943822 Wed Jul 15 19:20:46 2026        1 125152 180510  1.1 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web  957996  957995 Wed Jul 15 03:10:16 2026       22 1157396 1158438  0.9 lean --server -Dexperimental.module=true
lean4web  958005  957996 Wed Jul 15 03:10:16 2026        6 87416 97403  0.3 /lean/bin/lean --worker -Dexperimental.module=true file:///mathlib-stable/mathlib-stable.lean
lean4web 1017566 1017565 Wed Jul 15 19:40:09 2026       12 275908 276953  0.2 lean --server -Dexperimental.module=true
lean4web 1017572 1017566 Wed Jul 15 19:40:09 2026       24 103052 114642  0.4 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1059845 1059844 Wed Jul 15 19:52:30 2026        6 348492 349535  0.3 lean --server -Dexperimental.module=true
lean4web 1059850 1059845 Wed Jul 15 19:52:31 2026       24 647512 1204201  5.2 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1074218 1074217 Wed Jul 15 19:56:59 2026        4 278388 279430  0.2 lean --server -Dexperimental.module=true
lean4web 1074229 1074218 Wed Jul 15 19:56:59 2026       25 635640 1209490  5.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1088471 1088470 Wed Jul 15 20:00:16 2026        7 321400 322443  0.3 lean --server -Dexperimental.module=true
lean4web 1093258 1088471 Wed Jul 15 20:00:37 2026       18 635980 1209911  5.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1103013 1103012 Wed Jul 15 20:02:05 2026        4 270580 271623  0.2 lean --server -Dexperimental.module=true
lean4web 1103069 1103013 Wed Jul 15 20:02:05 2026        2 76304 84717  0.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1135853 1135852 Wed Jul 15 20:07:32 2026        5 270928 271971  0.2 lean --server -Dexperimental.module=true
lean4web 1160524  442454 Wed Jul 15 20:12:29 2026        0 68744 89348  0.6 /home/lean4web/.elan/toolchains/leanprover--lean4---v4.32.0/bin/lake -d ../mathlib4 env .lake/build/bin/loogle --json --interactive
lean4web 1177726 1177725 Wed Jul 15 20:18:05 2026       38 1297840 1334791  1.0 lean --server -Dexperimental.module=true
lean4web 1177732 1177726 Wed Jul 15 20:18:05 2026       13 7270760 7307712  5.5 /lean/bin/lean --worker -Dexperimental.module=true file:///nightly-with-mathlib/nightly-with-mathlib.lean
lean4web 1179613 1179612 Wed Jul 15 20:18:27 2026        4 270668 271710  0.2 lean --server -Dexperimental.module=true
lean4web 1179637 1179613 Wed Jul 15 20:18:27 2026        0 74212 83476  0.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1189949 1189948 Wed Jul 15 20:21:28 2026        4 276544 277588  0.2 lean --server -Dexperimental.module=true
lean4web 1220438 1220437 Wed Jul 15 20:26:04 2026        4 272500 273543  0.2 lean --server -Dexperimental.module=true
lean4web 1220464 1220438 Wed Jul 15 20:26:04 2026        1 63132 71704  0.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1268183 1268182 Wed Jul 15 20:35:04 2026        5 273024 274067  0.2 lean --server -Dexperimental.module=true
lean4web 1268190 1268183 Wed Jul 15 20:35:05 2026       24 546052 1121187  5.2 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1269828 1189949 Wed Jul 15 20:35:25 2026        5 465620 1035621  5.1 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1279596 1279595 Wed Jul 15 20:36:39 2026        6 278212 279270  0.2 lean --server -Dexperimental.module=true
lean4web 1279619 1279596 Wed Jul 15 20:36:40 2026        4 75956 84103  0.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1286854 1286853 Wed Jul 15 20:38:08 2026        7 303332 304390  0.2 lean --server -Dexperimental.module=true
lean4web 1286883 1286854 Wed Jul 15 20:38:08 2026       20 629656 1272540  5.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1289724 1135853 Wed Jul 15 20:38:25 2026        8 240772 403359  1.9 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1304769 1304768 Wed Jul 15 20:39:58 2026        5 275844 276917  0.2 lean --server -Dexperimental.module=true
lean4web 1305211 1304769 Wed Jul 15 20:40:02 2026       12 525972 1167761  5.2 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1335904 1335903 Wed Jul 15 20:44:05 2026        4 270664 271735  0.2 lean --server -Dexperimental.module=true
lean4web 1335909 1335904 Wed Jul 15 20:44:05 2026        0 63668 71605  0.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1363732 1363731 Wed Jul 15 20:47:23 2026        4 270624 271696  0.2 lean --server -Dexperimental.module=true
lean4web 1363776 1363732 Wed Jul 15 20:47:24 2026        0 96740 133905  0.8 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1365160 1365159 Wed Jul 15 20:47:34 2026        4 268636 269708  0.2 lean --server -Dexperimental.module=true
lean4web 1365293 1365160 Wed Jul 15 20:47:35 2026        0 55236 63173  0.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1367028 3887229 Wed Jul 15 20:47:59 2026        6 551248 2148741  5.2 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 1982207 1982205 Wed Jul 15 12:35:32 2026        5 272668 273739  0.2 lean --server -Dexperimental.module=true
lean4web 1983663 1982207 Wed Jul 15 12:35:35 2026        8 1631444 1663793  2.1 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 2013598 2013597 Wed Jul 15 12:36:47 2026       11 279972 281044  0.2 lean --server -Dexperimental.module=true
lean4web 2013625 2013598 Wed Jul 15 12:36:47 2026       55 143920 152933  0.4 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 2141012 2141011 Wed Jul 15 12:46:00 2026        5 272096 273172  0.2 lean --server -Dexperimental.module=true
lean4web 2141017 2141012 Wed Jul 15 12:46:01 2026        3 85096 93902  0.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 2279272 2279271 Wed Jul 15 05:18:11 2026       19 1146400 1147471  0.9 lean --server -Dexperimental.module=true
lean4web 2279298 2279272 Wed Jul 15 05:18:11 2026        5 82716 92154  0.3 /lean/bin/lean --worker -Dexperimental.module=true file:///MathlibDemo/MathlibDemo.lean
lean4web 3492753 3492752 Tue Jul 14 12:38:13 2026       28 1149428 1150499  0.9 lean --server -Dexperimental.module=true
lean4web 3553633 3553632 Wed Jul 15 15:44:11 2026       51 1056376 1090938  0.8 lean --server -Dexperimental.module=true
lean4web 3887229 3887228 Wed Jul 15 16:35:42 2026       36 387916 388989  0.3 lean --server -Dexperimental.module=true
lean4web 4173591 4173590 Wed Jul 15 17:07:41 2026       14 320456 321529  0.3 lean --server -Dexperimental.module=true
sg         41262   36927 Wed Jul  8 10:24:57 2026        0     0     0  0.0 /home/sg/.elan/toolchains/leanprover--lean4-nightly---nightly-2026-07-07/bin/lake serve -- -Dserve
sg         41268   41262 Wed Jul  8 10:24:57 2026        3     0     0  0.2 /home/sg/.elan/toolchains/leanprover--lean4-nightly---nightly-2026-07-07/bin/lean --server -Dserve
sg         56984   55629 Wed Jul  8 10:31:52 2026        1     0     0  0.0 ../../build/release/stage1/bin/lean --root=.. vcgenTickFrames.lean
sebasti+  149630 3233871 Wed Jul 15 19:14:06 2026        0     0     0  0.0 /home/sebastian/lean43/src/../build/release/stage0/bin/lake serve -- /home/sebastian/lean43/src
sebasti+  149635  149630 Wed Jul 15 19:14:06 2026       13     0     0  0.2 /home/sebastian/lean43/build/release/stage0/bin/lean --server /home/sebastian/lean43/src
sebasti+  149649  149635 Wed Jul 15 19:14:07 2026       22     0     0  0.3 /home/sebastian/lean43/build/release/stage0/bin/lean --worker file:///home/sebastian/lean43/src/Le
sebasti+  725485       1 Mon Jul 13 08:15:45 2026        3     0     0  0.1 /home/sebastian/lean42/build/release/stage1/bin/lean Mathlib/CategoryTheory/Limits/Shapes/Grothend
henrik    796766  796311 Mon Jul 13 08:25:43 2026        0     0     0  0.0 /home/henrik/explore/tests/../build/release/stage1/bin/lake serve -- /home/henrik/explore/tests
henrik    796771  796766 Mon Jul 13 08:25:43 2026        8     0     0  0.2 /home/henrik/explore/build/release/stage1/bin/lean --server /home/henrik/explore/tests
henrik    796778  796771 Mon Jul 13 08:25:43 2026       25     0     0  0.0 /home/henrik/explore/build/release/stage1/bin/lean --worker file:///home/henrik/explore/tests/comp
henrik    932454  932290 Wed Jul 15 09:36:24 2026        0     0     0  0.0 lake serve -- /home/henrik/leanwuzla
henrik    932461  932454 Wed Jul 15 09:36:24 2026        8     0     0  0.2 /home/henrik/lean4/build/release/stage1/bin/lean --server /home/henrik/leanwuzla
henrik    932466  932461 Wed Jul 15 09:36:24 2026       14     0     0  0.1 /home/henrik/lean4/build/release/stage1/bin/lean --worker file:///home/henrik/leanwuzla/Leanwuzla/
henrik   1021544 1021040 Mon Jul 13 08:44:15 2026        0     0     0  0.0 /home/henrik/explore/src/../build/release/stage0/bin/lake serve -- /home/henrik/explore/src
henrik   1021547 1021544 Mon Jul 13 08:44:15 2026        9     0     0  0.2 /home/henrik/explore/build/release/stage0/bin/lean --server /home/henrik/explore/src
henrik   1021553 1021547 Mon Jul 13 08:44:15 2026       57     0     0  0.1 /home/henrik/explore/build/release/stage0/bin/lean --worker file:///home/henrik/explore/src/Lean/D
henrik   1036901 1035939 Wed Jul 15 09:40:43 2026        0     0     0  0.0 lake serve -- /home/henrik/leanwuzla
henrik   1037005 1036901 Wed Jul 15 09:40:43 2026        8     0     0  0.2 /home/henrik/lean4/build/release/stage1/bin/lean --server /home/henrik/leanwuzla
henrik   1037023 1037005 Wed Jul 15 09:40:43 2026       27     0     0  0.1 /home/henrik/lean4/build/release/stage1/bin/lean --worker file:///home/henrik/leanwuzla/Leanwuzla/
leo      1092803 2824190 Wed Jul 15 19:37:02 2026        4     0     0  0.2 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      1181866 2824190 Wed Jul 15 19:39:18 2026       11     0     0  0.2 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
wojciech 1337012 1335470 Wed Jul 15 15:09:50 2026        0     0     0  0.0 /home/wojciech/lean4-stateful-linters/src/../build/release/stage0/bin/lake serve -- /home/wojciech
wojciech 1337018 1337012 Wed Jul 15 15:09:50 2026       44     0     0  0.2 /home/wojciech/lean4-stateful-linters/build/release/stage0/bin/lean --server /home/wojciech/lean4-
wojciech 1414551 1337018 Wed Jul 15 15:13:31 2026        2     0     0  0.1 /home/wojciech/lean4-stateful-linters/build/release/stage0/bin/lean --worker file:///home/wojciech
sebasti+ 1427099 1420615 Wed Jul 15 15:13:54 2026        0     0     0  0.0 /home/sebastian/lean4/src/../build/release/stage0/bin/lake serve -- /home/sebastian/lean4/src
sebasti+ 1427187 1427099 Wed Jul 15 15:13:55 2026        4     0     0  0.2 /home/sebastian/lean4/build/release/stage0/bin/lean --server /home/sebastian/lean4/src
sebasti+ 1427379 1427187 Wed Jul 15 15:13:55 2026        2     0     0  0.0 /home/sebastian/lean4/build/release/stage0/bin/lean --worker file:///home/sebastian/lean4/src/Lean
sebasti+ 1427852 1420689 Wed Jul 15 15:13:55 2026        0     0     0  0.2 /home/sebastian/.elan/toolchains/lean42/bin/lake serve -- /home/sebastian/mathlib42
sebasti+ 1428825 1427852 Wed Jul 15 15:13:56 2026       15     0     0  0.8 /home/sebastian/lean42/build/release/stage1/bin/lean --server /home/sebastian/mathlib42
sebasti+ 1428849 1428825 Wed Jul 15 15:13:56 2026        3     0     0  0.1 /home/sebastian/lean42/build/release/stage1/bin/lean --worker file:///home/sebastian/mathlib42/scr
wojciech 1447292 1337018 Wed Jul 15 15:16:47 2026     1053     0     0  0.4 /home/wojciech/lean4-stateful-linters/build/release/stage0/bin/lean --worker file:///home/wojciech
mac      1483696 3263047 Wed Jul 15 19:53:23 2026        5     0     0  0.1 /home/mac/.elan/toolchains/leanprover--lean4---v4.32.0-rc1/bin/lean --worker file:///home/mac/.ela
mac      1544552 2864439 Wed Jul 15 19:56:02 2026      525     0     0  0.3 /home/mac/.elan/toolchains/leanprover--lean4---v4.32.0-rc1/bin/lean --worker file:///home/mac/nero
leo      1670398 2824190 Wed Jul 15 20:04:46 2026        1     0     0  0.2 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      1713593 2343996 Wed Jul 15 20:06:17 2026        1     0     0  1.1 /home/leo/projects/lean4/build/release/stage1/bin/lean --worker -s1000000 file:///home/leo/project
wojciech 1745787 1337018 Wed Jul 15 15:39:29 2026        3     0     0  0.2 /home/wojciech/lean4-stateful-linters/build/release/stage0/bin/lean --worker file:///home/wojciech
rob      1903461 1903013 Wed Jul 15 15:42:38 2026        0 280268 280597  0.2 /home/rob/.elan/toolchains/leanprover--lean4-nightly---nightly-2026-07-14/bin/lake serve -- /hom
rob      1904265 1903461 Wed Jul 15 15:42:41 2026        9 1127568 1127917  0.8 /home/rob/.elan/toolchains/leanprover--lean4-nightly---nightly-2026-07-14/bin/lean --server /h
rob      1904271 1904265 Wed Jul 15 15:42:41 2026        2 17324 17700  0.0 /home/rob/.elan/toolchains/leanprover--lean4-nightly---nightly-2026-07-14/bin/lean --worker file:/
rob      1904274 1904265 Wed Jul 15 15:42:41 2026        1 15328 15704  0.0 /home/rob/.elan/toolchains/leanprover--lean4-nightly---nightly-2026-07-14/bin/lean --worker file:/
sg       2041374   41268 Thu Jul  9 10:19:26 2026       59     0     0  0.0 /home/sg/.elan/toolchains/leanprover--lean4-nightly---nightly-2026-07-07/bin/lean --worker -Dserve
sebasti+ 2058965 3233871 Wed Jul 15 20:32:33 2026        0     0     0  0.0 /home/sebastian/lean43/tests/pkg/leanchecker/../../../build/release/stage1/bin/lake serve -- /home
sebasti+ 2058969 2058965 Wed Jul 15 20:32:33 2026        6     0     0  0.2 /home/sebastian/lean43/build/release/stage1/bin/lean --server /home/sebastian/lean43/tests/pkg/lea
sebasti+ 2059150 3233871 Wed Jul 15 20:32:35 2026        0     0     0  0.0 /home/sebastian/lean43/tests/../build/release/stage1/bin/lake serve -- /home/sebastian/lean43/test
sebasti+ 2059154 2059150 Wed Jul 15 20:32:35 2026        6     0     0  0.2 /home/sebastian/lean43/build/release/stage1/bin/lean --server /home/sebastian/lean43/tests
henrik   2096452 2096044 Fri Jul 10 20:40:23 2026        0     0     0  0.0 /home/henrik/leanwuzla/../lean4/build/release/stage1/bin/lake serve -- /home/henrik/leanwuzla
henrik   2096458 2096452 Fri Jul 10 20:40:23 2026       12     0     0  0.2 /home/henrik/lean4/build/release/stage1/bin/lean --server /home/henrik/leanwuzla
leo      2163848 2824190 Wed Jul 15 16:07:55 2026       20     0     0  0.1 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2166504 2824190 Wed Jul 15 16:08:15 2026        2     0     0  0.1 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
henrik   2169910 2169901 Wed Jul 15 20:43:25 2026       79     0     0  0.2 /home/henrik/lean4/build/release/stage0/bin/lake build -f /home/henrik/lean4/build/release/stage1/
sebasti+ 2172304 2402463 Wed Jul 15 20:43:33 2026       19     0     0  0.3 /home/sebastian/lean42/build/release/stage0/bin/lean --worker file:///home/sebastian/lean42/src/Le
leo      2174716 2174707 Wed Jul 15 20:43:35 2026       78     0     0  0.2 /home/leo/projects/lean4/build/release/stage1/bin/lake build -f /home/leo/projects/lean4/build/rel
sebasti+ 2210212 2210207 Wed Jul 15 20:44:44 2026       38     0     0  0.6 /home/sebastian/lean43/build/release/stage1/bin/lake build -f /home/sebastian/lean43/build/release
sebasti+ 2321574 2321569 Wed Jul 15 20:46:44 2026        5     0     0  0.1 /home/sebastian/lean42/build/release/stage0/bin/lake build -f /home/sebastian/lean42/build/release
leo      2343989 1471226 Wed Jul 15 16:11:35 2026        0     0     0  0.0 /home/leo/projects/lean4/tests/../build/release/stage1/bin/lake serve -- /home/leo/projects/lean4/
leo      2343996 2343989 Wed Jul 15 16:11:35 2026       11     0     0  0.4 /home/leo/projects/lean4/build/release/stage1/bin/lean --server /home/leo/projects/lean4/tests --t
leo      2344001 2343996 Wed Jul 15 16:11:35 2026        1     0     0  0.3 /home/leo/projects/lean4/build/release/stage1/bin/lean --worker -s1000000 file:///home/leo/project
leo      2344004 2343996 Wed Jul 15 16:11:35 2026        1     0     0  0.2 /home/leo/projects/lean4/build/release/stage1/bin/lean --worker -s1000000 file:///home/leo/project
leo      2344007 2343996 Wed Jul 15 16:11:35 2026        2     0     0  0.2 /home/leo/projects/lean4/build/release/stage1/bin/lean --worker -s1000000 file:///home/leo/project
leo      2344010 2343996 Wed Jul 15 16:11:35 2026        2     0     0  0.2 /home/leo/projects/lean4/build/release/stage1/bin/lean --worker -s1000000 file:///home/leo/project
leo      2344014 2343996 Wed Jul 15 16:11:35 2026        6     0     0  1.0 /home/leo/projects/lean4/build/release/stage1/bin/lean --worker -s1000000 file:///home/leo/project
henrik   2346544 2169910 Wed Jul 15 20:47:25 2026        6     0     0  0.3 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
sebasti+ 2346587 2321574 Wed Jul 15 20:47:25 2026        4     0     0  0.2 /home/sebastian/lean42/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnE
leo      2346884 2174716 Wed Jul 15 20:47:25 2026        4     0     0  0.2 /home/leo/projects/lean4/build/release/stage1/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawO
henrik   2346924 2169910 Wed Jul 15 20:47:25 2026        3     0     0  0.3 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
sebasti+ 2346935 2321574 Wed Jul 15 20:47:25 2026        4     0     0  0.2 /home/sebastian/lean42/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnE
henrik   2347379 2169910 Wed Jul 15 20:47:26 2026        2     0     0  0.3 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347384 2169910 Wed Jul 15 20:47:26 2026        2     0     0  0.3 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
leo      2347795 2174716 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/leo/projects/lean4/build/release/stage1/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawO
leo      2347797 2174716 Wed Jul 15 20:47:28 2026        0     0     0  0.2 /home/leo/projects/lean4/build/release/stage1/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawO
henrik   2347823 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.2 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347825 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.2 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347828 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.2 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347831 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.2 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347835 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.2 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347846 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347854 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.2 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347861 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347868 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347870 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347876 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347880 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347985 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347989 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2347995 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2348001 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2348008 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2348013 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2348020 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2348030 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2348035 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2348039 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2348275 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.0 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
henrik   2348282 2169910 Wed Jul 15 20:47:28 2026        0     0     0  0.0 /home/henrik/lean4/build/release/stage0/bin/lean -Dinterpreter.prefer_native=false -Dpp.rawOnError
leo      2353960 2343996 Wed Jul 15 16:15:29 2026        3     0     0  0.6 /home/leo/projects/lean4/build/release/stage1/bin/lean --worker -s1000000 file:///home/leo/project
sebasti+ 2402458 2401896 Wed Jul 15 16:46:37 2026        0     0     0  0.0 /home/sebastian/lean42/src/../build/release/stage0/bin/lake serve -- /home/sebastian/lean42/src
sebasti+ 2402463 2402458 Wed Jul 15 16:46:37 2026       20     0     0  0.2 /home/sebastian/lean42/build/release/stage0/bin/lean --server /home/sebastian/lean42/src
henrik   2704719 2704359 Wed Jul 15 12:15:55 2026        0     0     0  0.0 /home/henrik/lean4/src/../build/release/stage0/bin/lake serve -- /home/henrik/lean4/src
henrik   2704722 2704719 Wed Jul 15 12:15:55 2026       13     0     0  0.2 /home/henrik/lean4/build/release/stage0/bin/lean --server /home/henrik/lean4/src
henrik   2704728 2704722 Wed Jul 15 12:15:55 2026       99     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean --worker file:///home/henrik/lean4/src/Lean/Meta/
henrik   2728895 2704722 Wed Jul 15 12:16:12 2026        4     0     0  0.0 /home/henrik/lean4/build/release/stage0/bin/lean --worker file:///home/henrik/lean4/src/Lean/Meta/
wojciech 2733496 1337018 Wed Jul 15 17:55:58 2026        6     0     0  0.1 /home/wojciech/lean4-stateful-linters/build/release/stage0/bin/lean --worker file:///home/wojciech
wojciech 2745937 1337018 Wed Jul 15 17:57:54 2026        1     0     0  0.2 /home/wojciech/lean4-stateful-linters/build/release/stage0/bin/lean --worker file:///home/wojciech
wojciech 2753755 1335470 Wed Jul 15 17:58:55 2026        0     0     0  0.0 /home/wojciech/lean4-stateful-linters/tests/../build/release/stage1/bin/lake serve -- /home/wojcie
wojciech 2753758 2753755 Wed Jul 15 17:58:55 2026        4     0     0  0.2 /home/wojciech/lean4-stateful-linters/build/release/stage1/bin/lean --server /home/wojciech/lean4-
sg       2760969   41268 Thu Jul  9 12:45:46 2026       58     0     0  0.0 /home/sg/.elan/toolchains/leanprover--lean4-nightly---nightly-2026-07-07/bin/lean --worker -Dserve
henrik   2767519 2704722 Wed Jul 15 12:19:51 2026       19     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean --worker file:///home/henrik/lean4/src/Lean/Meta/
henrik   2772650 2704722 Wed Jul 15 12:20:21 2026        4     0     0  0.0 /home/henrik/lean4/build/release/stage0/bin/lean --worker file:///home/henrik/lean4/src/Lean/Meta/
henrik   2773837 2704722 Wed Jul 15 12:20:32 2026        4     0     0  0.0 /home/henrik/lean4/build/release/stage0/bin/lean --worker file:///home/henrik/lean4/src/Lean/Meta/
henrik   2774778 2704722 Wed Jul 15 12:20:39 2026        6     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean --worker file:///home/henrik/lean4/src/Lean/Meta/
wojciech 2776713 1337018 Wed Jul 15 18:02:21 2026        3     0     0  0.1 /home/wojciech/lean4-stateful-linters/build/release/stage0/bin/lean --worker file:///home/wojciech
henrik   2776927 2704722 Wed Jul 15 12:21:03 2026       16     0     0  0.1 /home/henrik/lean4/build/release/stage0/bin/lean --worker file:///home/henrik/lean4/src/Lean/Meta/
wojciech 2781371 2753758 Wed Jul 15 18:03:56 2026        8     0     0  1.1 /home/wojciech/lean4-stateful-linters/build/release/stage1/bin/lean --worker file:///home/wojciech
henrik   2788501 2704722 Wed Jul 15 12:22:10 2026        4     0     0  0.0 /home/henrik/lean4/build/release/stage0/bin/lean --worker file:///home/henrik/lean4/src/Lean/Meta/
leo      2824187 1471226 Wed Jul 15 02:59:12 2026        0     0     0  0.0 /home/leo/projects/lean4/src/../build/release/stage0/bin/lake serve -- /home/leo/projects/lean4/sr
leo      2824190 2824187 Wed Jul 15 02:59:12 2026       39     0     0  0.3 /home/leo/projects/lean4/build/release/stage0/bin/lean --server /home/leo/projects/lean4/src --tst
leo      2824195 2824190 Wed Jul 15 02:59:12 2026        7     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824198 2824190 Wed Jul 15 02:59:12 2026        6     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824201 2824190 Wed Jul 15 02:59:12 2026        8     0     0  0.1 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824204 2824190 Wed Jul 15 02:59:12 2026       10     0     0  0.1 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824208 2824190 Wed Jul 15 02:59:12 2026       14     0     0  0.2 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824212 2824190 Wed Jul 15 02:59:12 2026        7     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824216 2824190 Wed Jul 15 02:59:12 2026        6     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824220 2824190 Wed Jul 15 02:59:12 2026        7     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824224 2824190 Wed Jul 15 02:59:12 2026        7     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824228 2824190 Wed Jul 15 02:59:12 2026        6     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824232 2824190 Wed Jul 15 02:59:12 2026        7     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824236 2824190 Wed Jul 15 02:59:12 2026        8     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824241 2824190 Wed Jul 15 02:59:12 2026        7     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824246 2824190 Wed Jul 15 02:59:12 2026        9     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824250 2824190 Wed Jul 15 02:59:12 2026      397     0     0  0.2 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824256 2824190 Wed Jul 15 02:59:12 2026        8     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824260 2824190 Wed Jul 15 02:59:12 2026        7     0     0  0.1 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824264 2824190 Wed Jul 15 02:59:12 2026        8     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824268 2824190 Wed Jul 15 02:59:12 2026        7     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824272 2824190 Wed Jul 15 02:59:12 2026        7     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
leo      2824279 2824190 Wed Jul 15 02:59:12 2026       13     0     0  0.1 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
wojciech 2825816 2825710 Wed Jul 15 18:07:01 2026        0     0     0  0.0 /home/wojciech/lean4/tests/../build/release/stage1/bin/lake serve -- /home/wojciech/lean4/tests
wojciech 2825850 2825816 Wed Jul 15 18:07:01 2026        4     0     0  0.2 /home/wojciech/lean4/build/release/stage1/bin/lean --server /home/wojciech/lean4/tests
wojciech 2825855 2825850 Wed Jul 15 18:07:01 2026        4     0     0  0.1 /home/wojciech/lean4/build/release/stage1/bin/lean --worker file:///home/wojciech/lean4/tests/elab
wojciech 2835158 2834994 Wed Jul 15 18:07:13 2026        0     0     0  0.0 /home/wojciech/lean4-stateful-linters/tests/../build/release/stage1/bin/lake serve -- /home/wojcie
wojciech 2835186 2835158 Wed Jul 15 18:07:13 2026        5     0     0  0.2 /home/wojciech/lean4-stateful-linters/build/release/stage1/bin/lean --server /home/wojciech/lean4-
leo      2854499 2824190 Wed Jul 15 03:04:59 2026        7     0     0  0.0 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
mac      2864408 2863656 Wed Jul 15 18:12:50 2026        0     0     0  0.1 /home/mac/.elan/toolchains/leanprover--lean4---v4.32.0-rc1/bin/lake serve -- /home/mac/nerodia
mac      2864439 2864408 Wed Jul 15 18:12:52 2026      121     0     0  0.2 /home/mac/.elan/toolchains/leanprover--lean4---v4.32.0-rc1/bin/lean --server /home/mac/nerodia
leo      2882666 2824190 Wed Jul 15 03:10:32 2026       13     0     0  0.2 /home/leo/projects/lean4/build/release/stage0/bin/lean --worker -s1000000 file:///home/leo/project
sg       2963317   41268 Thu Jul  9 17:42:48 2026       54     0     0  0.0 /home/sg/.elan/toolchains/leanprover--lean4-nightly---nightly-2026-07-07/bin/lean --worker -Dserve
wojciech 3060014 2835186 Wed Jul 15 18:18:04 2026        2     0     0  1.1 /home/wojciech/lean4-stateful-linters/build/release/stage1/bin/lean --worker file:///home/wojciech
sebasti+ 3163967 3163966 Mon Jul 13 12:39:17 2026       44     0     0  0.1 /home/sebastian/lean42/build/release/stage1/bin/lean Mathlib/FieldTheory/KummerExtension.lean
sebasti+ 3255166 3255165 Mon Jul 13 12:43:15 2026       27     0     0  0.1 /home/sebastian/lean42/build/release/stage1/bin/lean Mathlib/Topology/Algebra/Valued/ValuedField.l
mac      3263047 2863656 Wed Jul 15 18:29:28 2026        2     0     0  0.2 /home/mac/.elan/toolchains/leanprover--lean4---v4.32.0-rc1/bin/lean --server /home/mac/.elan/toolc
sg       3567686   41268 Thu Jul  9 13:56:57 2026       56     0     0  0.0 /home/sg/.elan/toolchains/leanprover--lean4-nightly---nightly-2026-07-07/bin/lean --worker -Dserve
henrik   3732955 3732438 Mon Jul 13 18:19:13 2026        0     0     0  0.0 /home/henrik/leanwuzla/../lean4/build/release/stage1/bin/lake env zsh
`;
